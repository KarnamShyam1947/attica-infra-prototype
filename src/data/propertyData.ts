import { Property } from "../types/Proerty";

export const properties: Property[] = [
    // --- Houses (10) ---
    {
        _id: '1',
        id: '1',
        title: 'Luxury Villa',
        phone: "7899997784",
        type: 'house',
        price: '₹2.5 Cr',
        location: { city: 'Bangalore', area: 'Whitefield', pincode: '560066' },
        features: ['4 BHK', '3500 sqft', 'Fully Furnished', 'Garden'],
        images: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1600585152925-c1f9a3c4e3c4?auto=format&fit=crop&q=80'
        ],
        description: 'Luxurious villa with modern amenities and spacious rooms'
    },
    {
        _id: '2',
        id: '2',
        title: 'Urban House',
        phone: "7899997784",
        type: 'house',
        price: '₹1.8 Cr',
        location: { city: 'Hyderabad', area: 'Banjara Hills', pincode: '500034' },
        features: ['3 BHK', '3000 sqft', 'Semi Furnished', 'Private Terrace'],
        images: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1600585152925-c1f9a3c4e3c4?auto=format&fit=crop&q=80'
        ],
        description: 'Elegant urban home in a premium neighborhood'
    },
    {
        _id: '3',
        id: '3',
        title: 'Cozy Bungalow',
        phone: "7899997784",
        type: 'house',
        price: '₹1.4 Cr',
        location: { city: 'Chennai', area: 'Anna Nagar', pincode: '600040' },
        features: ['3 BHK', '2400 sqft', 'Garden', 'Car Parking'],
        images: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1600585152925-c1f9a3c4e3c4?auto=format&fit=crop&q=80'
        ],
        description: 'Charming bungalow in a quiet, green neighborhood'
    },
    {
        _id: '4',
        id: '4',
        title: 'Green Villa',
        phone: "7899997784",
        type: 'house',
        price: '₹3.2 Cr',
        location: { city: 'Bangalore', area: 'Indiranagar', pincode: '560038' },
        features: ['5 BHK', '4000 sqft', 'Rooftop Garden', 'Smart Home'],
        images: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1600585152925-c1f9a3c4e3c4?auto=format&fit=crop&q=80'
        ],
        description: 'Eco-friendly luxury villa with modern tech features'
    },
    {
        _id: '5',
        id: '5',
        title: 'Heritage House',
        phone: "7899997784",
        type: 'house',
        price: '₹2.1 Cr',
        location: { city: 'Hyderabad', area: 'Jubilee Hills', pincode: '500033' },
        features: ['4 BHK', '3600 sqft', 'Antique Finish', 'Courtyard'],
        images: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1600585152925-c1f9a3c4e3c4?auto=format&fit=crop&q=80'
        ],
        description: 'A blend of tradition and comfort with heritage design'
    },
    {
        _id: '6',
        id: '6',
        title: 'Lakeview Villa',
        phone: "7899997784",
        type: 'house',
        price: '₹2.7 Cr',
        location: { city: 'Chennai', area: 'ECR', pincode: '600115' },
        features: ['4 BHK', '3800 sqft', 'Lake Facing', 'Swimming Pool'],
        images: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1600585152925-c1f9a3c4e3c4?auto=format&fit=crop&q=80'
        ],
        description: 'Premium lake-facing villa with serene views'
    },
    {
        _id: '7',
        id: '7',
        title: 'Compact Duplex',
        phone: "7899997784",
        type: 'house',
        price: '₹90 L',
        location: { city: 'Bangalore', area: 'Yelahanka', pincode: '560063' },
        features: ['2 BHK', '1500 sqft', 'Gated Community', 'Solar Power'],
        images: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1600585152925-c1f9a3c4e3c4?auto=format&fit=crop&q=80'
        ],
        description: 'Affordable duplex perfect for small families'
    },
    {
        _id: '8',
        id: '8',
        title: 'Sunshine Villa',
        phone: "7899997784",
        type: 'house',
        price: '₹2.9 Cr',
        location: { city: 'Hyderabad', area: 'Kokapet', pincode: '500075' },
        features: ['4 BHK', '3700 sqft', 'Open Kitchen', 'Jacuzzi'],
        images: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1600585152925-c1f9a3c4e3c4?auto=format&fit=crop&q=80'
        ],
        description: 'Bright and airy villa with all luxury amenities'
    },
    {
        _id: '9',
        id: '9',
        title: 'Peaceful Cottage',
        phone: "7899997784",
        type: 'house',
        price: '₹1.1 Cr',
        location: { city: 'Chennai', area: 'Thoraipakkam', pincode: '600097' },
        features: ['3 BHK', '2000 sqft', 'Veranda', 'Pet Friendly'],
        images: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1600585152925-c1f9a3c4e3c4?auto=format&fit=crop&q=80'
        ],
        description: 'Perfect family home with peaceful vibes'
    },
    {
        _id: '10',
        id: '10',
        title: 'Elegant Home',
        phone: "7899997784",
        type: 'house',
        price: '₹2.3 Cr',
        location: { city: 'Bangalore', area: 'Jayanagar', pincode: '560041' },
        features: ['4 BHK', '3200 sqft', 'Wooden Flooring', 'Home Theater'],
        images: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1600585152925-c1f9a3c4e3c4?auto=format&fit=crop&q=80'
        ],
        description: 'Stylish and elegant home with top-end finishes'
    },

    // --- Plots (10) ---
    {
        _id: '11',
        id: '11',
        title: 'Premium Plot',
        phone: "7899997784",
        type: 'plot',
        price: '₹80 L',
        location: { city: 'Bangalore', area: 'Electronic City', pincode: '560100' },
        features: ['1200 sqft', 'Corner Plot', 'East Facing', 'BMRDA Approved'],
        images: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1600585152925-c1f9a3c4e3c4?auto=format&fit=crop&q=80'
        ],
        description: 'Premium corner plot in a gated community'
    },
    {
        _id: '12',
        id: '12',
        title: 'Garden Plot',
        phone: "7899997784",
        type: 'plot',
        price: '₹65 L',
        location: { city: 'Hyderabad', area: 'Shankarpally', pincode: '501203' },
        features: ['1500 sqft', 'Gated Community', 'West Facing'],
        images: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1600585152925-c1f9a3c4e3c4?auto=format&fit=crop&q=80'
        ],
        description: 'Well-located plot with nearby greenery and amenities'
    },
    {
        _id: '13',
        id: '13',
        title: 'Lakefront Plot',
        phone: "7899997784",
        type: 'plot',
        price: '₹95 L',
        location: { city: 'Chennai', area: 'Tambaram', pincode: '600045' },
        features: ['2000 sqft', 'Lake View', 'DTCP Approved'],
        images: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1600585152925-c1f9a3c4e3c4?auto=format&fit=crop&q=80'
        ],
        description: 'Spacious plot with excellent resale potential'
    },
    {
        _id: '14',
        id: '14',
        title: 'Affordable Plot',
        phone: "7899997784",
        type: 'plot',
        price: '₹45 L',
        location: { city: 'Bangalore', area: 'Anekal', pincode: '562106' },
        features: ['1000 sqft', 'North Facing', 'Loan Facility'],
        images: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1600585152925-c1f9a3c4e3c4?auto=format&fit=crop&q=80'
        ],
        description: 'Ideal for budget-conscious home builders'
    },
    {
        _id: '15',
        id: '15',
        title: 'Sunrise Plot',
        phone: "7899997784",
        type: 'plot',
        price: '₹70 L',
        location: { city: 'Hyderabad', area: 'Adibatla', pincode: '501510' },
        features: ['1400 sqft', 'Near IT Corridor', 'HMDA Approved'],
        images: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1600585152925-c1f9a3c4e3c4?auto=format&fit=crop&q=80'
        ],
        description: 'Best suited for villa construction near tech zone'
    },
    {
        _id: '16',
        id: '16',
        title: 'Hill View Plot',
        phone: "7899997784",
        type: 'plot',
        price: '₹1 Cr',
        location: { city: 'Chennai', area: 'Siruseri', pincode: '603103' },
        features: ['2200 sqft', 'Scenic View', 'CMDA Approved'],
        images: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1600585152925-c1f9a3c4e3c4?auto=format&fit=crop&q=80'
        ],
        description: 'Exclusive plot in a fast-developing suburb'
    },
    {
        _id: '17',
        id: '17',
        title: 'Developer Plot',
        phone: "7899997784",
        type: 'plot',
        price: '₹55 L',
        location: { city: 'Bangalore', area: 'Sarjapur Road', pincode: '560035' },
        features: ['1200 sqft', 'BBMP Approved', 'Developed Layout'],
        images: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1600585152925-c1f9a3c4e3c4?auto=format&fit=crop&q=80'
        ],
        description: 'Plot in a well-developed layout with all facilities'
    },
    {
        _id: '18',
        id: '18',
        title: 'Investment Plot',
        phone: "7899997784",
        type: 'plot',
        price: '₹50 L',
        location: { city: 'Hyderabad', area: 'Gachibowli', pincode: '500032' },
        features: ['1000 sqft', 'Near ORR', 'Clear Title'],
        images: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1600585152925-c1f9a3c4e3c4?auto=format&fit=crop&q=80'
        ],
        description: 'Ideal for investment with strong appreciation'
    },
    {
        _id: '19',
        id: '19',
        title: 'Twin Plot',
        phone: "7899997784",
        type: 'plot',
        price: '₹85 L',
        location: { city: 'Chennai', area: 'Perumbakkam', pincode: '600100' },
        features: ['1800 sqft', 'Road Facing', 'Electricity Ready'],
        images: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1600585152925-c1f9a3c4e3c4?auto=format&fit=crop&q=80'
        ],
        description: 'Spacious dual plot for large homes'
    },
    {
        _id: '20',
        id: '20',
        title: 'Mega Plot',
        phone: "7899997784",
        type: 'plot',
        price: '₹1.2 Cr',
        location: { city: 'Bangalore', area: 'Kanakapura Road', pincode: '560082' },
        features: ['3000 sqft', 'Wide Road Access', 'Park Nearby'],
        images: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1600585152925-c1f9a3c4e3c4?auto=format&fit=crop&q=80'
        ],
        description: 'Perfect for villa or apartment project'
    },

    // Apartments (to be continued...)
    {
        _id: '21',
        id: '21',
        title: 'Modern Apartment',
        phone: "7899997784",
        type: 'apartment',
        price: '₹1.2 Cr',
        location: { city: 'Bangalore', area: 'HSR Layout', pincode: '560102' },
        features: ['3 BHK', '1800 sqft', 'Swimming Pool', 'Gym'],
        images: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1600585152925-c1f9a3c4e3c4?auto=format&fit=crop&q=80'
        ],
        description: 'Modern apartment with premium amenities'
    },
    {
        _id: '22',
        id: '22',
        title: 'Skyline Heights',
        phone: "7899997784",
        type: 'apartment',
        price: '₹1.5 Cr',
        location: { city: 'Hyderabad', area: 'Madhapur', pincode: '500081' },
        features: ['3 BHK', '2000 sqft', 'Sky Lounge', 'Clubhouse'],
        images: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1600585152925-c1f9a3c4e3c4?auto=format&fit=crop&q=80'
        ],
        description: 'Luxury high-rise living with beautiful city views'
    },
    {
        _id: '23',
        id: '23',
        title: 'Budget Apartment',
        phone: "7899997784",
        type: 'apartment',
        price: '₹65 L',
        location: { city: 'Chennai', area: 'Velachery', pincode: '600042' },
        features: ['2 BHK', '950 sqft', 'Lift Access', 'Parking'],
        images: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1600585152925-c1f9a3c4e3c4?auto=format&fit=crop&q=80'
        ],
        description: 'Affordable and compact flat in prime area'
    },
    {
        _id: '24',
        id: '24',
        title: 'Elite Towers',
        phone: "7899997784",
        type: 'apartment',
        price: '₹2.1 Cr',
        location: { city: 'Bangalore', area: 'Koramangala', pincode: '560095' },
        features: ['4 BHK', '2300 sqft', 'Infinity Pool', 'Private Lift'],
        images: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1600585152925-c1f9a3c4e3c4?auto=format&fit=crop&q=80'
        ],
        description: 'Elite apartments with state-of-the-art amenities'
    },
    {
        _id: '25',
        id: '25',
        title: 'Central Residency',
        phone: "7899997784",
        type: 'apartment',
        price: '₹1 Cr',
        location: { city: 'Hyderabad', area: 'Begumpet', pincode: '500016' },
        features: ['3 BHK', '1600 sqft', 'Community Hall', '24x7 Security'],
        images: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1600585152925-c1f9a3c4e3c4?auto=format&fit=crop&q=80'
        ],
        description: 'Centrally located, perfect for working professionals'
    },
    {
        _id: '26',
        id: '26',
        title: 'Sea Breeze Apartment',
        phone: "7899997784",
        type: 'apartment',
        price: '₹1.3 Cr',
        location: { city: 'Chennai', area: 'Besant Nagar', pincode: '600090' },
        features: ['3 BHK', '1900 sqft', 'Sea View', 'Balcony'],
        images: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1600585152925-c1f9a3c4e3c4?auto=format&fit=crop&q=80'
        ],
        description: 'Premium beachside apartment with fantastic views'
    },
    {
        _id: '27',
        id: '27',
        title: 'Tech Park View',
        phone: "7899997784",
        type: 'apartment',
        price: '₹85 L',
        location: { city: 'Bangalore', area: 'Brookefield', pincode: '560037' },
        features: ['2 BHK', '1100 sqft', 'Children’s Play Area', 'Power Backup'],
        images: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1600585152925-c1f9a3c4e3c4?auto=format&fit=crop&q=80'
        ],
        description: 'Comfortable apartment near IT hubs'
    },
    {
        _id: '28',
        id: '28',
        title: 'Hilltop Residency',
        phone: "7899997784",
        type: 'apartment',
        price: '₹1.7 Cr',
        location: { city: 'Hyderabad', area: 'Manikonda', pincode: '500089' },
        features: ['3 BHK', '2100 sqft', 'Terrace Garden', 'Jogging Track'],
        images: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1600585152925-c1f9a3c4e3c4?auto=format&fit=crop&q=80'
        ],
        description: 'Spacious apartment in serene hilltop community'
    },
    {
        _id: '29',
        id: '29',
        title: 'Urban Nest',
        phone: "7899997784",
        type: 'apartment',
        price: '₹75 L',
        location: { city: 'Chennai', area: 'Porur', pincode: '600116' },
        features: ['2 BHK', '1000 sqft', 'Lift', 'Gated Security'],
        images: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1600585152925-c1f9a3c4e3c4?auto=format&fit=crop&q=80'
        ],
        description: 'Cozy and safe apartment for small families'
    },
    {
        _id: '30',
        id: '30',
        title: 'Luxury Penthouse',
        phone: "7899997784",
        type: 'apartment',
        price: '₹3 Cr',
        location: { city: 'Bangalore', area: 'MG Road', pincode: '560001' },
        features: ['5 BHK', '4000 sqft', 'Private Terrace', 'Personal Elevator'],
        images: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1600585152925-c1f9a3c4e3c4?auto=format&fit=crop&q=80'
        ],
        description: 'Exclusive penthouse with panoramic city views'
    }
];