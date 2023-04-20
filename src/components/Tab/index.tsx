import * as React from 'react';
import { useDispatch } from 'react-redux';
import { FC } from 'react';
import { productActions } from '../../store/product/product.slice';

// mui imports
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

interface categoryTabProps {
  tabs: {
    id: string;
    value: string;
  }[];
  textColor: string;
  selectedTextColor: string;
  borderBottom?: string;
  border?: string;
  backgroundColor: string;
}
const CategoryTab: FC<categoryTabProps> = ({
  tabs,
  textColor,
  backgroundColor,
  selectedTextColor,
  borderBottom,
  border
}) => {
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        sx={{
          '.MuiTab-root.Mui-selected': {
            backgroundColor: backgroundColor,
            color: selectedTextColor,
            borderBottom: borderBottom
          }
        }}
        TabIndicatorProps={{
          style: { display: 'none' }
        }}
        onChange={handleChange}
        centered>
        {tabs?.map(tab => (
          <Tab
            key={tab.id}
            sx={{
              color: textColor,
              border: border,
              textTransform: 'capitalize',
              mr: 1,
              fontSize: {
                sm: '0.875rem',
                xs: 7
              },
              padding: {
                sm: '12px 16px',
                xs: '12px 5px'
              },
              minWidth: {
                md: 90,
                sm: 76,
                xs: 0
              }
            }}
            label={tab.value}
            onClick={() => {
              dispatch(productActions.filterProduct(tab.id));
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default CategoryTab;
