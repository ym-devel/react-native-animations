import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MarkerProps } from '~types';

export default function Markers({
  duration,
  cap,
  interval,

  rootWidth,
  gripWidth,
  markerWidth,
  color
}: MarkerProps) {
  const MARKERS = new Array(duration + 1).fill('') || [];

  const calculateMargin = (): number => {
    return MARKERS.length - 1 > cap
      ? (rootWidth - ((cap + 1) * markerWidth) - (gripWidth * 2)) / (cap)
      : (rootWidth - (MARKERS.length * markerWidth) - (gripWidth * 2)) / (MARKERS.length - 1)
  }

  return (
    <View style={[styles.root, { paddingHorizontal: gripWidth }]}>
      {MARKERS.map((_, index) => {
        return (
          <View key={`${index}`} style={[
            styles.marker,
            { width: markerWidth, borderRadius: markerWidth, backgroundColor: color },
            index % interval === 0 && { height: '50%' },
            index !== 0 && { marginLeft: calculateMargin() },
          ]
          } />
        )
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    height: '100%',

    flexDirection: 'row',
    alignItems: 'center',

    //TEST
    backgroundColor: 'cyan'
  },
  marker: {
    height: '25%',
  },
});
