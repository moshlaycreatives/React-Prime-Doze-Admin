/** Project-wide Outfit font — import in index.html + use via MUI theme & fontFamily */
export const fontFamily = '"Outfit", system-ui, -apple-system, sans-serif';

export const fs = {
  welcome: "clamp(1.1rem, 2vw, 1.5rem)",
  nav: "clamp(0.875rem, 1.2vw, 1rem)",
  subtitle: "clamp(0.875rem, 1.2vw, 1rem)",
  body: "clamp(0.9rem, 1.1vw, 1rem)",
  sm: "clamp(0.75rem, 1vw, 0.875rem)",
  iconLg: "clamp(1.25rem, 2vw, 1.5rem)",
};

/** Card content scales with card width (containerType: "inline-size"); title uses vw so all cards match. */
export const chartFs = {
  title: "clamp(1rem, 0.75rem + 1vw, 1.5625rem)",
  filter: "clamp(0.75rem, 2.5cqi, 0.8125rem)",
  caption: "clamp(0.75rem, 2.5cqi, 0.8125rem)",
  label: "clamp(0.625rem, 2.5cqi, 0.875rem)",
  labelLg: "clamp(0.625rem, 3.5cqi, 1rem)",
  categoryLabel: "clamp(0.6875rem, 3cqi, 1rem)",
  centerLabel: "clamp(0.6875rem, 2.8cqi, 0.875rem)",
  centerValue: "clamp(1rem, 4.5cqi, 1.25rem)",
  legendLabel: "clamp(0.8125rem, 2.8cqi, 0.875rem)",
  legendLabelLg: "clamp(0.8125rem, 3.5cqi, 1rem)",
  legendValue: "clamp(0.875rem, 3cqi, 0.9375rem)",
  rowLabel: "clamp(0.8125rem, 2.8cqi, 0.875rem)",
  rowValue: "clamp(0.9375rem, 3.2cqi, 1rem)",
  barWidth: "clamp(14px, 4.5cqi, 24px)",
  barMaxWidth: "clamp(8px, 3.5cqi, 18px)",
  chartHeight: "clamp(220px, 55cqi, 280px)",
  pieSize: "clamp(140px, 45cqi, 170px)",
  donutSize: "clamp(160px, 58cqi, 220px)",
};
