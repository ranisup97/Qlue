import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  IconHome,
  IconChat,
  IconEye,
  IconProfile,
  IconUserActive,
  IconUser,
  IconSeacrh,
  IconPlusActive,
  IconPlus,
  IconMailActive,
  IconMail,
  IconGridActive,
  IconGrid,
  IconHomeActive,
} from '../../assets';
const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if (label === 'Home') return isFocused ? <IconHomeActive /> : <IconHome />;
    if (label === 'Chat') return isFocused ? <IconMailActive /> : <IconMail />;

    if (label === 'Report')
      return isFocused ? <IconPlusActive /> : <IconPlus />;

    if (label === 'Search') return isFocused ? <IconSeacrh /> : <IconSeacrh />;

    if (label === 'Profile')
      return isFocused ? <IconUserActive /> : <IconUser />;
    return <IconEye />;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text
        style={{
          color: isFocused ? '#6378f4' : '#222',
          bottom: 0,
          bottom: 0,
          position: 'absolute',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center'},
});
