import { Slider, Typography } from '@mui/material';
import { useCallback, type FC, useMemo } from 'react';

import styles from './FilterSection.module.css';

type FilterSectionProps = {
  label: string;
  value: number;
  min: number;
  max: number;
  amount: number;
  name: string;
  onChange: (name: string, value: number) => void;
};

export const FilterSection: FC<FilterSectionProps> = ({
  label,
  value,
  min,
  max,
  amount,
  name,
  onChange,
}) => {
  const id = `${name}-id`;
  const handleChange = useCallback(
    (_event: Event, value: number | number[]) => {
      onChange(name, value as number);
    },
    [name, onChange],
  );

  const step = (max - min) / amount;
  const marks = useMemo(
    () =>
      [...Array(amount)].map((_, index) => {
        const value = Math.round(step * index + min);
        return {
          value,
          label: String(value),
        };
      }),
    [amount, min, step],
  );

  return (
    <section className={styles.filterSection}>
      <Typography id={id} component="h3">
        {label}
      </Typography>
      <Slider
        aria-labelledby={id}
        min={min}
        max={max}
        valueLabelDisplay="auto"
        marks={marks}
        step={step}
        value={value}
        onChange={handleChange}
      />
    </section>
  );
};
