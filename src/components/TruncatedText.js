import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {movieColor} from '../utils/theme/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import style from './style';

const TruncatedText = ({text, maxWords}) => {
  const words = text.split(' ');
  const truncatedText = words.slice(0, maxWords).join(' ');
  const remainingText = words.slice(maxWords).join(' ');
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <View>
      <Text style={style.descriptionText}>
        {showMore ? (
          <>
            {text}{' '}
            <Text onPress={toggleShowMore} style={style.truncatedText}>
              See Less ...
            </Text>
          </>
        ) : (
          <>
            {truncatedText}
            {remainingText.length > 0 && (
              <Text style={style.truncatedText} onPress={toggleShowMore}>
                {' '}
                See More ...
              </Text>
            )}
          </>
        )}
      </Text>
    </View>
  );
};

export default TruncatedText;
