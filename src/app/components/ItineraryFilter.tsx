import { useState } from 'react';
import { Itinerary } from '../data/itineraries';

interface ItineraryFilterProps {
  itineraries: Itinerary[];
  onFilterChange: (filtered: Itinerary[]) => void;
}

export function ItineraryFilter({ itineraries, onFilterChange }: ItineraryFilterProps) {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [maxPrice, setMaxPrice] = useState<number>(200);

  const regions = ['All', 'Sierra', 'Tahoe', 'Shasta', 'Klamath', 'Lost Coast', 'Other'];
  const difficulties = ['All', 'Easy', 'Moderate', 'Hard'];

  const applyFilters = (region: string, difficulty: string, price: number) => {
    let filtered = itineraries;

    if (region !== 'All') {
      filtered = filtered.filter((item) => item.region === region);
    }

    if (difficulty !== 'All') {
      filtered = filtered.filter((item) => item.difficulty === difficulty);
    }

    filtered = filtered.filter((item) => item.price_usd <= price);

    onFilterChange(filtered);
  };

  const handleRegionChange = (region: string) => {
    setSelectedRegion(region);
    applyFilters(region, selectedDifficulty, maxPrice);
  };

  const handleDifficultyChange = (difficulty: string) => {
    setSelectedDifficulty(difficulty);
    applyFilters(selectedRegion, difficulty, maxPrice);
  };

  const handlePriceChange = (price: number) => {
    setMaxPrice(price);
    applyFilters(selectedRegion, selectedDifficulty, price);
  };

  const clearFilters = () => {
    setSelectedRegion('All');
    setSelectedDifficulty('All');
    setMaxPrice(200);
    onFilterChange(itineraries);
  };

  return (
    <div className="bg-white rounded-xl p-6 border border-mist mb-8">
      <div className="flex flex-col md:flex-row md:items-end gap-6">
        {/* Region Filter */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-ink mb-2">
            Region
          </label>
          <div className="flex flex-wrap gap-2">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => handleRegionChange(region)}
                className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                  selectedRegion === region
                    ? 'bg-[#0A3D33] text-white'
                    : 'bg-cream text-ink hover:bg-mist'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Difficulty Filter */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-ink mb-2">
            Difficulty
          </label>
          <div className="flex flex-wrap gap-2">
            {difficulties.map((difficulty) => (
              <button
                key={difficulty}
                onClick={() => handleDifficultyChange(difficulty)}
                className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                  selectedDifficulty === difficulty
                    ? 'bg-[#0A3D33] text-white'
                    : 'bg-cream text-ink hover:bg-mist'
                }`}
              >
                {difficulty}
              </button>
            ))}
          </div>
        </div>

        {/* Price Filter */}
        <div className="flex-1">
          <label htmlFor="price-slider" className="block text-sm font-medium text-ink mb-2">
            Max Price: ${maxPrice}
          </label>
          <input
            id="price-slider"
            type="range"
            min="0"
            max="200"
            step="10"
            value={maxPrice}
            onChange={(e) => handlePriceChange(Number(e.target.value))}
            className="w-full h-2 bg-mist rounded-lg appearance-none cursor-pointer accent-[#0A3D33]"
          />
        </div>

        {/* Clear Filters */}
        <button
          onClick={clearFilters}
          className="px-4 py-2 text-sm text-[#5A9BC0] hover:text-[#4A8BAF] transition-colors"
        >
          Clear filters
        </button>
      </div>
    </div>
  );
}
