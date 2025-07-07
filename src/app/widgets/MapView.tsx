// src/widgets/MapView.tsx
import React from 'react';
import MapViewLib, { Marker } from 'react-native-maps';
import { View, StyleSheet } from 'react-native';
import { Note } from '@models/Note';



type Props = { notes: Note[] };

export default function MapView({ notes }: Props) {
  return (
    <View style={styles.mapContainer}>
      <MapViewLib
        style={styles.map}
        initialRegion={{
          latitude: 32.0853,
          longitude: 34.7818,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}
      >
        {notes.map((note) => (
          <Marker
            key={note.id}
            coordinate={{ latitude: note.lat, longitude: note.long }}
            title={note.title}
            description={note.body}
          />
        ))}
      </MapViewLib>
    </View>
  );
}

const styles = StyleSheet.create({
  mapContainer: { flex: 1 },
  map: { flex: 1 },
});
// This component renders a map view with markers for each note's location.
// It uses react-native-maps to display the map and markers.