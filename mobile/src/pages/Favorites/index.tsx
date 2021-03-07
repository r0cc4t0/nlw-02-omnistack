import React from 'react';
import { View, ScrollView } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

const Favorites = () => {
  return (
    <View style={styles.container}>
      <PageHeader title="Meus Proffys Favoritos" />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >
      </ScrollView>
    </View>
  );
};

export default Favorites;
