import { Clock } from '@shinobi-ledger/shared';
import { FC, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const App: FC = () => {
  const [serverDate, setServerDate] = useState<string>('');

  useEffect(() => {
    fetch('http://localhost:3000')
      .then(response => response.json())
      .then(data => setServerDate(data.currentDate))
      .catch(error => console.log('Error fetching server date:', error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.firstText]}>
        Current date from local: {Clock.create().toISOString()}
      </Text>

      <Text style={styles.text}>Current date from server: {serverDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  firstText: {
    marginBottom: 30,
  },
});
