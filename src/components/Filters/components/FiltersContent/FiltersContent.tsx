import { Button, Container, Divider, Typography } from '@mui/material';
import { useState, type FC, useCallback } from 'react';

import { FilterSection } from '../FilterSection';
import { type Filter } from '../../types';

type FilterCall = (filter: Filter) => void;

export type FiltersContentProps = {
  filterInit: Filter;
  priceConfig: {
    min: number;
    max: number;
  };
  onFilter: FilterCall;
};

const priceStepsAmount = 5;
const minRating = 1;
const maxRating = 5;
const ratingStepsAmount = 4;

export const FiltersContent: FC<FiltersContentProps> = ({
  filterInit,
  priceConfig,
  onFilter,
}) => {
  const [filter, setFilter] = useState(filterInit);
  const handleFilterChange = useCallback((name: string, value: number) => {
    setFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleApply = () => {
    onFilter(filter);
  };

  return (
    <Container>
      <Typography component="h2" variant="h5">
        Filters
      </Typography>

      <Divider />
      <FilterSection
        label="Price"
        name="price"
        value={filter.price}
        min={priceConfig.min}
        max={priceConfig.max}
        amount={priceStepsAmount}
        onChange={handleFilterChange}
      />
      <FilterSection
        label="Rating"
        name="rating"
        value={filter.rating}
        min={minRating}
        max={maxRating}
        amount={ratingStepsAmount}
        onChange={handleFilterChange}
      />
      <Button type="button" variant="outlined" onClick={handleApply}>
        Apply
      </Button>
    </Container>
  );
};
