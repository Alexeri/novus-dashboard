import React from 'react'
import ReactApexChart from 'react-apexcharts'
import {Box, Typography, Stack, borderRadius} from '@pankod/refine-mui'
import { PieChartProps } from 'interfaces/home'
import { TrendingUp } from '@mui/icons-material'

const PieChart = ({title, value, series, colors, increase}: PieChartProps) => {
  console.log(colors[0]);
  return (
    <Box
      id="chart"
      flex={1}
      display="flex"
      bgcolor="#fcfcfc"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      pl={3.5}
      py={2}
      gap={2}
      borderRadius="15px"
      minHeight="110px"
      width="fit-content"
    >
      <Stack direction="column">
        <Typography fontSize={15} color="#808191">
          {title}
        </Typography>
        <Typography fontSize={24} color="#11142d" fontWeight={700} mt={0.5}>
          {value}
        </Typography>
        <Stack direction="row" alignItems="center" mt={0.5} color="#000"> 
          <TrendingUp sx={{backgroundColor:"#f0f0f0",borderRadius:"50%",padding:"4px",color:colors[0]}}/>
          <Typography fontSize={12} ml="5px" fontWeight={500}>+{increase}% Inc</Typography>
        </Stack>
      </Stack>
      <ReactApexChart 
        options={{
          chart: { type:'donut' },
          colors,
          legend: { show: false },
          dataLabels: { enabled:false },
          plotOptions:{
            pie:{
              donut:{
                size: "60%"
                
              }
            }
          }
          
        }}
        series={series}
        type="donut"
        width="120px"
      />
    </Box>
  )
}

export default PieChart