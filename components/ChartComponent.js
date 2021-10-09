import { LineChart } from 'react-native-line-chart'

import React, { useState } from 'react';
import { StyleSheet, View, Text,Dimensions, Button} from 'react-native';





const Chart = props => {
  var tmpData = [1,3,4,5,6,7];
  const [randomData, setRandomData] = useState(tmpData);

  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  function refresh_data(newData){
    tmpData = newData
    setRandomData(tmpData)
  }

  const chartConfig = {
    backgroundGradientFrom: '#89B5F7',
    backgroundGradientTo: '#316FCC',
    decimalPlaces: 2, 
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`
  }
  
  
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      data: randomData
    }]
  }

  return (
    <View>
      <LineChart
        data={data}
        width={Dimensions.get('window').width - 20}
        height={220}
        chartConfig={chartConfig}
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
      <Button
        title="repaint"
        onPress={()=>refresh_data([1,3,324,4])}
      />
</View>
  );
};



export default Chart;