// Note: Replace 'YOUR_YELP_API_KEY' with actual key in production
const YELP_API_KEY = 'YOUR_YELP_API_KEY';
const YELP_BASE_URL = 'https://api.yelp.com/v3';

interface YelpSearchParams {
  location: string;
  price?: number; // 1-4 representing Yelp's price ranges ($, $$, $$$, $$$$)
  maxBudget?: number;
}

export const searchRestaurants = async ({ location, price, maxBudget }: YelpSearchParams) => {
  try {
    const response = await fetch(`${YELP_BASE_URL}/businesses/search?location=${encodeURIComponent(location)}&price=${price}`, {
      headers: {
        'Authorization': `Bearer ${YELP_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) throw new Error('Failed to fetch from Yelp API');
    
    const data = await response.json();
    return data.businesses.filter((business: any) => {
      // Additional filtering by maxBudget if provided
      if (maxBudget) {
        // Yelp doesn't provide exact prices, so this is an approximation
        const avgPrice = business.price?.length || 1;
        return avgPrice * 10 <= maxBudget; // Rough estimate: $ = ~$10, $$ = ~$20, etc.
      }
      return true;
    });
  } catch (error) {
    console.error('Error fetching from Yelp:', error);
    throw error;
  }
};