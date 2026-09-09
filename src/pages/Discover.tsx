import { useState, useMemo } from "react";
import { Container, Typography } from "@mui/material";

import {
  PRODUCTS,
  STORES,
  NUTRITION_FILTERS,
  type Product,
} from "../Data/Products";
import StoreSelector from "../components/StoreSelector";
import FilterGroup from "../components/FilterGroup";
import ProductGrid from "../components/ProductGrid";

// Hulpfunctie voor het filteren
function filterProducts(
  products: Product[],
  store: string,
  activeFilters: string[],
) {
  if (!store) return [];

  return products.filter((product) => {
    const isSameStore = product.store === store;
    const hasAllFilters = activeFilters.every((filter) =>
      product.tags.includes(filter),
    );

    return isSameStore && hasAllFilters;
  });
}

export default function Discover() {
  // types meegeven aan de usesate
  const [selectedStore, setSelectedStore] = useState<string>("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleStoreChange = (
    _: React.MouseEvent<HTMLElement>,
    newStore: string | null,
  ) => {
    if (newStore) {
      setSelectedStore(newStore);
    }
  };

  // filter-toggle logica
  const handleFilterToggle = (filter: string) => {
    setSelectedFilters((currentFilters) =>
      currentFilters.includes(filter)
        ? currentFilters.filter((item) => item !== filter)
        : [...currentFilters, filter],
    );
  };

  // Gefilterde producten ophalen
  const filteredProducts = useMemo(
    () => filterProducts(PRODUCTS, selectedStore, selectedFilters),
    [selectedStore, selectedFilters],
  );

  return (
    <Container maxWidth="md" className="pt-6 pb-24">
      <Typography
        variant="h4"
        component="h1"
        className="font-bold mb-6 text-gray-800"
      >
        Ontdek Producten
      </Typography>

      <StoreSelector
        stores={STORES}
        selectedStore={selectedStore}
        onStoreChange={handleStoreChange}
      />

      {selectedStore && (
        <>
          <FilterGroup
            filters={NUTRITION_FILTERS}
            selectedFilters={selectedFilters}
            onFilterToggle={handleFilterToggle}
          />

          <Typography variant="h6" className="font-semibold mb-4 text-gray-700">
            Producten bij {selectedStore} ({filteredProducts.length})
          </Typography>

          <ProductGrid products={filteredProducts} />
        </>
      )}
    </Container>
  );
}
