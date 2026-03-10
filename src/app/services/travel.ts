import { Injectable, signal } from '@angular/core';
import { Trip } from '../models/trip.model';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  private tripsList = signal<Trip[]>([

    {
      id: 1,
      name: 'Paris',
      country: 'France',
      price: 1200,
      description: 'The City of Light',
      imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500',
      summary: 'Experience the romance and charm of Paris.',
      schedule: [
        { day: 1, title: 'Eiffel Tower', activities: ['Hotel check-in and rest', 'Afternoon visit to Eiffel Tower', 'Evening Seine River cruise'] },
        { day: 2, title: 'Art & Culture', activities: ['Morning Louvre Museum visit', 'Walk near Notre-Dame', 'Latin Quarter dinner'] },
        { day: 3, title: 'Shopping & Streets', activities: ['Morning Montmartre walk', 'Champs-Élysées shopping', 'Street cafés'] },
        { day: 4, title: 'Day Trip', activities: ['Half-day Versailles visit', 'Relaxed evening stroll'] }
      ]
    },

    {
      id: 2,
      name: 'Kyoto',
      country: 'Japan',
      price: 1500,
      description: 'Ancient temples and gardens',
      imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=500',
      summary: 'Traditional culture and serenity.',
      schedule: [
        { day: 1, title: 'Temple Tour', activities: ['Morning Kinkaku-ji visit', 'Ryoan-ji Zen garden', 'Evening Gion walk'] },
        { day: 2, title: 'Nature Walk', activities: ['Early Arashiyama Bamboo Grove walk', 'Fushimi Inari torii gates'] },
        { day: 3, title: 'Cultural Kyoto', activities: ['Tea ceremony experience', 'Traditional market visit'] },
        { day: 4, title: 'Leisure Day', activities: ['Free exploration', 'Local cuisine tasting'] }
      ]
    },

    {
      id: 3,
      name: 'Rome',
      country: 'Italy',
      price: 1100,
      description: 'History, art, and food',
      imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=500',
      summary: 'Ancient ruins and architecture.',
      schedule: [
        { day: 1, title: 'Ancient Rome', activities: ['Colosseum guided tour', 'Roman Forum walk'] },
        { day: 2, title: 'Vatican City', activities: ['Vatican Museums', 'Sistine Chapel'] },
        { day: 3, title: 'City Squares', activities: ['Pantheon visit', 'Trevi Fountain evening'] },
        { day: 4, title: 'Food & Leisure', activities: ['Local food tour', 'Free exploration'] }
      ]
    },

    {
      id: 4,
      name: 'Bali',
      country: 'Indonesia',
      price: 950,
      description: 'Tropical paradise',
      imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=500',
      summary: 'Relax on beaches and explore culture.',
      schedule: [
        { day: 1, title: 'Beach Day', activities: ['Morning Kuta Beach', 'Sunset at Tanah Lot'] },
        { day: 2, title: 'Cultural Tour', activities: ['Ubud town visit', 'Rice terraces walk'] },
        { day: 3, title: 'Nature', activities: ['Waterfall visit', 'Forest exploration'] },
        { day: 4, title: 'Relaxation', activities: ['Spa experience', 'Beach leisure'] }
      ]
    },

    {
      id: 5,
      name: 'New York',
      country: 'USA',
      price: 1400,
      description: 'The city that never sleeps',
      imageUrl: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=500',
      summary: 'Iconic skyline and attractions.',
      schedule: [
        { day: 1, title: 'City Icons', activities: ['Morning Statue of Liberty ferry', 'Times Square night walk'] },
        { day: 2, title: 'Views & Parks', activities: ['Central Park stroll', 'Empire State Building views'] },
        { day: 3, title: 'Culture', activities: ['Museum or Broadway area', 'SoHo walk'] },
        { day: 4, title: 'Neighborhoods', activities: ['Brooklyn Bridge walk', 'Local food spots'] }
      ]
    },

    {
      id: 6,
      name: 'Cairo',
      country: 'Egypt',
      price: 850,
      description: 'Ancient civilization',
      imageUrl: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=500',
      summary: 'Land of pyramids.',
      schedule: [
        { day: 1, title: 'Giza Tour', activities: ['Great Pyramid visit', 'Sphinx exploration'] },
        { day: 2, title: 'City Tour', activities: ['Egyptian Museum', 'Nile cruise evening'] },
        { day: 3, title: 'Historic Cairo', activities: ['Citadel visit', 'Old city walk'] },
        { day: 4, title: 'Markets', activities: ['Khan el-Khalili bazaar', 'Local cafés'] }
      ]
    },

    {
      id: 7,
      name: 'Sydney',
      country: 'Australia',
      price: 1600,
      description: 'Harbor city',
      imageUrl: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=500',
      summary: 'Beaches and landmarks.',
      schedule: [
        { day: 1, title: 'City Highlights', activities: ['Opera House tour', 'Harbour Bridge views'] },
        { day: 2, title: 'Beach Day', activities: ['Bondi Beach morning', 'Coastal walk'] },
        { day: 3, title: 'Nature', activities: ['Blue Mountains trip', 'Scenic viewpoints'] },
        { day: 4, title: 'Leisure', activities: ['Harbour cruise', 'Shopping'] }
      ]
    },

    {
      id: 8,
      name: 'London',
      country: 'United Kingdom',
      price: 1750,
      description: 'Historic landmarks',
      imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500',
      summary: 'Royal and cultural heritage.',
      schedule: [
        { day: 1, title: 'Royal Tour', activities: ['Buckingham Palace', 'Big Ben walk'] },
        { day: 2, title: 'Museums', activities: ['British Museum visit', 'London Eye ride'] },
        { day: 3, title: 'Historic London', activities: ['Tower Bridge area', 'River Thames walk'] },
        { day: 4, title: 'Shopping', activities: ['Oxford Street', 'Local markets'] }
      ]
    },

    {
      id: 9,
      name: 'Tokyo',
      country: 'Japan',
      price: 2100,
      description: 'Tradition meets technology',
      imageUrl: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=500',
      summary: 'Neon streets and temples.',
      schedule: [
        { day: 1, title: 'Modern Tokyo', activities: ['Shibuya crossing', 'Akihabara shopping'] },
        { day: 2, title: 'Cultural Tokyo', activities: ['Senso-ji Temple', 'Meiji Shrine'] },
        { day: 3, title: 'City Life', activities: ['Harajuku streets', 'Observation deck views'] },
        { day: 4, title: 'Free Day', activities: ['Local neighborhoods', 'Food exploration'] }
      ]
    },

    {
      id: 10,
      name: 'Dubai',
      country: 'UAE',
      price: 2200,
      description: 'Luxury in the desert',
      imageUrl: 'https://images.unsplash.com/photo-1528702748617-c64d49f918af?w=500',
      summary: 'Modern wonders.',
      schedule: [
        { day: 1, title: 'City Tour', activities: ['Burj Khalifa visit', 'Dubai Mall'] },
        { day: 2, title: 'Safari', activities: ['Desert safari drive', 'Camp dinner shows'] },
        { day: 3, title: 'Luxury', activities: ['Palm Jumeirah', 'Marina walk'] },
        { day: 4, title: 'Leisure', activities: ['Beach time', 'Shopping'] }
      ]
    },

    {
      id: 11,
      name: 'Singapore',
      country: 'Singapore',
      price: 2000,
      description: 'Clean and futuristic',
      imageUrl: 'https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=500',
      summary: 'Modern city with greenery.',
      schedule: [
        { day: 1, title: 'City Tour', activities: ['Marina Bay walk', 'Merlion Park'] },
        { day: 2, title: 'Nature', activities: ['Gardens by the Bay', 'Sentosa Island'] },
        { day: 3, title: 'Culture', activities: ['Chinatown visit', 'Little India'] },
        { day: 4, title: 'Shopping', activities: ['Orchard Road', 'Local markets'] }
      ]
    },

    {
      id: 12,
      name: 'Barcelona',
      country: 'Spain',
      price: 1700,
      description: 'Art and beaches',
      imageUrl: 'https://images.unsplash.com/photo-1464790719320-516ecd75af6c?w=500',
      summary: 'Gaudí architecture.',
      schedule: [
        { day: 1, title: 'Architecture', activities: ['Sagrada Familia', 'Park Güell'] },
        { day: 2, title: 'Beach & City', activities: ['Barceloneta beach', 'La Rambla walk'] },
        { day: 3, title: 'Culture', activities: ['Gothic Quarter', 'Local tapas'] },
        { day: 4, title: 'Leisure', activities: ['Free exploration', 'Shopping'] }
      ]
    },

    {
      id: 13,
      name: 'Amsterdam',
      country: 'Netherlands',
      price: 1650,
      description: 'Canals and charm',
      imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500',
      summary: 'Historic canals.',
      schedule: [
        { day: 1, title: 'City Tour', activities: ['Canal cruise', 'Anne Frank House'] },
        { day: 2, title: 'Museums', activities: ['Van Gogh Museum', 'Rijksmuseum'] },
        { day: 3, title: 'Neighborhoods', activities: ['Jordaan walk', 'Local cafés'] },
        { day: 4, title: 'Leisure', activities: ['Bike ride', 'Shopping'] }
      ]
    },

    {
      id: 14,
      name: 'Istanbul',
      country: 'Turkey',
      price: 1600,
      description: 'Europe meets Asia',
      imageUrl: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=500',
      summary: 'Cultural fusion.',
      schedule: [
        { day: 1, title: 'Historic Tour', activities: ['Hagia Sophia', 'Blue Mosque'] },
        { day: 2, title: 'Markets', activities: ['Grand Bazaar', 'Spice Market'] },
        { day: 3, title: 'Waterways', activities: ['Bosphorus cruise', 'Scenic views'] },
        { day: 4, title: 'Local Life', activities: ['Neighborhood walk', 'Café visit'] }
      ]
    },

    {
      id: 15,
      name: 'Bangkok',
      country: 'Thailand',
      price: 1350,
      description: 'Street food and temples',
      imageUrl: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=500',
      summary: 'Vibrant city.',
      schedule: [
        { day: 1, title: 'Temple Tour', activities: ['Grand Palace', 'Wat Pho'] },
        { day: 2, title: 'Markets', activities: ['Floating market', 'Night bazaar'] },
        { day: 3, title: 'City Life', activities: ['Skyline views', 'Street food crawl'] },
        { day: 4, title: 'Leisure', activities: ['Shopping malls', 'Relaxation'] }
      ]
    },

    {
      id: 16,
      name: 'Seoul',
      country: 'South Korea',
      price: 1900,
      description: 'K-culture capital',
      imageUrl: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?w=500',
      summary: 'Modern and traditional.',
      schedule: [
        { day: 1, title: 'Palaces', activities: ['Gyeongbokgung', 'Bukchon Village'] },
        { day: 2, title: 'City Life', activities: ['Myeongdong shopping', 'N Seoul Tower'] },
        { day: 3, title: 'Culture', activities: ['Han River walk', 'Local cafés'] },
        { day: 4, title: 'Leisure', activities: ['Free exploration', 'Food tasting'] }
      ]
    },

    {
      id: 17,
      name: 'Los Angeles',
      country: 'USA',
      price: 1850,
      description: 'Hollywood and beaches',
      imageUrl: 'https://images.unsplash.com/photo-1503264116251-35a269479413?w=500',
      summary: 'Entertainment capital.',
      schedule: [
        { day: 1, title: 'Hollywood', activities: ['Hollywood Sign view', 'Walk of Fame'] },
        { day: 2, title: 'Beach Day', activities: ['Santa Monica', 'Venice Beach'] },
        { day: 3, title: 'City Sights', activities: ['Beverly Hills', 'Downtown LA'] },
        { day: 4, title: 'Leisure', activities: ['Shopping', 'Relaxation'] }
      ]
    },

    {
      id: 18,
      name: 'San Francisco',
      country: 'USA',
      price: 1950,
      description: 'Golden Gate city',
      imageUrl: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=500',
      summary: 'Tech and scenery.',
      schedule: [
        { day: 1, title: 'Landmarks', activities: ['Golden Gate Bridge', 'Alcatraz tour'] },
        { day: 2, title: 'City Tour', activities: ['Cable cars', 'Fisherman’s Wharf'] },
        { day: 3, title: 'Neighborhoods', activities: ['Chinatown', 'Union Square'] },
        { day: 4, title: 'Leisure', activities: ['Scenic viewpoints', 'Shopping'] }
      ]
    },

    {
      id: 19,
      name: 'Venice',
      country: 'Italy',
      price: 1800,
      description: 'City of canals',
      imageUrl: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=500',
      summary: 'Romantic waterways.',
      schedule: [
        { day: 1, title: 'Canal Tour', activities: ['Gondola ride', 'St Mark’s Square'] },
        { day: 2, title: 'Islands', activities: ['Murano glass visit', 'Burano streets'] },
        { day: 3, title: 'Historic Venice', activities: ['Doge’s Palace', 'Bridge walks'] },
        { day: 4, title: 'Leisure', activities: ['Free exploration', 'Café time'] }
      ]
    },

    {
      id: 20,
      name: 'Prague',
      country: 'Czech Republic',
      price: 1550,
      description: 'Fairytale city',
      imageUrl: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=500',
      summary: 'Medieval charm.',
      schedule: [
        { day: 1, title: 'Old Town', activities: ['Charles Bridge', 'Old Town Square'] },
        { day: 2, title: 'Castle Tour', activities: ['Prague Castle', 'St Vitus Cathedral'] },
        { day: 3, title: 'Historic Streets', activities: ['Lesser Town walk', 'Local cafés'] },
        { day: 4, title: 'Leisure', activities: ['Shopping', 'Relaxed stroll'] }
      ]
    },

    {
      id: 21,
      name: 'Vienna',
      country: 'Austria',
      price: 1650,
      description: 'Imperial elegance',
      imageUrl: 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?w=500',
      summary: 'Music and palaces.',
      schedule: [
        { day: 1, title: 'Royal Tour', activities: ['Schönbrunn Palace', 'Hofburg'] },
        { day: 2, title: 'Culture', activities: ['Opera House', 'Café visit'] },
        { day: 3, title: 'Museums', activities: ['Art museums', 'Historic streets'] },
        { day: 4, title: 'Leisure', activities: ['Shopping', 'Relaxation'] }
      ]
    },

    {
      id: 22,
      name: 'Zurich',
      country: 'Switzerland',
      price: 2300,
      description: 'Alpine luxury',
      imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500',
      summary: 'Mountains and lakes.',
      schedule: [
        { day: 1, title: 'City Tour', activities: ['Old Town walk', 'Lake Zurich'] },
        { day: 2, title: 'Nature', activities: ['Mount Titlis', 'Cable car ride'] },
        { day: 3, title: 'Scenic Views', activities: ['Swiss countryside train', 'Photography stops'] },
        { day: 4, title: 'Leisure', activities: ['Chocolate shopping', 'Relaxation'] }
      ]
    },

    {
      id: 23,
      name: 'Moscow',
      country: 'Russia',
      price: 1700,
      description: 'Grand architecture',
      imageUrl: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=500',
      summary: 'Historic capital.',
      schedule: [
        { day: 1, title: 'Historic Sites', activities: ['Red Square', 'St Basil’s Cathedral'] },
        { day: 2, title: 'Culture', activities: ['Kremlin visit', 'Metro tour'] },
        { day: 3, title: 'Museums', activities: ['Art museums', 'City walk'] },
        { day: 4, title: 'Leisure', activities: ['Shopping', 'Local cafés'] }
      ]
    },

    {
      id: 24,
      name: 'Rio de Janeiro',
      country: 'Brazil',
      price: 1750,
      description: 'Beaches and carnival',
      imageUrl: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=500',
      summary: 'Vibrant city.',
      schedule: [
        { day: 1, title: 'Landmarks', activities: ['Christ the Redeemer', 'Sugarloaf views'] },
        { day: 2, title: 'Beach Day', activities: ['Copacabana', 'Ipanema'] },
        { day: 3, title: 'Culture', activities: ['Samba experience', 'City walk'] },
        { day: 4, title: 'Leisure', activities: ['Shopping', 'Relaxation'] }
      ]
    },

    {
      id: 25,
      name: 'Buenos Aires',
      country: 'Argentina',
      price: 1600,
      description: 'Tango and culture',
      imageUrl: 'https://images.unsplash.com/photo-1544986581-efac024faf62?w=500',
      summary: 'European flair.',
      schedule: [
        { day: 1, title: 'City Tour', activities: ['Plaza de Mayo', 'La Boca'] },
        { day: 2, title: 'Culture', activities: ['Tango show', 'Recoleta'] },
        { day: 3, title: 'Neighborhoods', activities: ['San Telmo walk', 'Local markets'] },
        { day: 4, title: 'Leisure', activities: ['Cafés', 'Shopping'] }
      ]
    },

    {
      id: 26,
      name: 'Auckland',
      country: 'New Zealand',
      price: 2100,
      description: 'Nature meets city',
      imageUrl: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?w=500',
      summary: 'Adventure destination.',
      schedule: [
        { day: 1, title: 'City Tour', activities: ['Sky Tower views', 'Harbor walk'] },
        { day: 2, title: 'Nature', activities: ['Waiheke Island', 'Beach time'] },
        { day: 3, title: 'Adventure', activities: ['Volcano hike', 'Scenic viewpoints'] },
        { day: 4, title: 'Leisure', activities: ['Shopping', 'Relaxation'] }
      ]
    },

    {
      id: 27,
      name: 'Hanoi',
      country: 'Vietnam',
      price: 1250,
      description: 'Old Quarter charm',
      imageUrl: 'https://images.unsplash.com/photo-1504457047772-27faf1c00561?w=500',
      summary: 'Historic streets and food.',
      schedule: [
        { day: 1, title: 'Old Quarter', activities: ['Hoan Kiem Lake walk', 'Street food tour'] },
        { day: 2, title: 'Culture', activities: ['Temple of Literature', 'Museum visit'] },
        { day: 3, title: 'Countryside', activities: ['Day trip nearby', 'Scenic views'] },
        { day: 4, title: 'Leisure', activities: ['Shopping', 'Relaxation'] }
      ]
    }

  ]);

  trips = this.tripsList.asReadonly();
}
