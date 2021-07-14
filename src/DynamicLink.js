import dynamicLinks from '@react-native-firebase/dynamic-links';

const dynLink = ({ navigation }) => {
  const handleDynamicLink = link => {
    // Handle dynamic link inside your own application
    if (link.url === `https://momotor.page.link/Reset`) {
      navigation.navigate('ChangePass')
    }
  };

  useEffect(() => {
    const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
    // When the component is unmounted, remove the listener
    return () => unsubscribe();
  }, []);

  return null;
}

export default dynLink