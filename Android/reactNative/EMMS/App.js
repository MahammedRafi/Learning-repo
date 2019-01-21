import React from "react";
import {
    Button,
    Text,
    View,
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    Platform,
    ScrollView,
    Header
} from "react-native";
import { Card, ListItem, Icon, TouchableOpacity, Image } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
    createBottomTabNavigator,
    createStackNavigator,
    createSwitchNavigator,
    createAppContainer
} from "react-navigation";

const isAndroid = Platform.OS === "android";

class HomeScreen extends React.Component {


    render() {
        return (
           
            <View>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <Card
                        image={require('./components/carImages/orderNow.png')}>

                        <Button
                            icon={<Icon name='code' color='#ffffff' />}
                            backgroundColor='#03A9F4'
                            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                            title='Order Now'
                            onPress={() => this.props.navigation.navigate("NewOrder")} />
                    </Card>
                    <Card
                        image={require('./components/carImages/trackorder.png')}>

                        <Button
                            icon={<Icon name='code' color='#ffffff' />}
                            backgroundColor='#03A9F4'
                            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                            title='Track order'
                            onPress={() => this.props.navigation.navigate("TrackOrder")} />
                    </Card>
                    <Card

                        image={require('./components/carImages/uploadDoc.png')}>

                        <Button
                            icon={<Icon name='code' color='#ffffff' />}
                            backgroundColor='#03A9F4'
                            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                            title='Submt Document'
                            onPress={() => this.props.navigation.navigate("SubmitDoc")} />
                    </Card>
                    <Card
                        image={require('./components/carImages/userGuide.png')}>

                        <Button
                            icon={<Icon name='code' color='#ffffff' />}
                            backgroundColor='#03A9F4'
                            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                            title='User manual'
                            onPress={() => this.props.navigation.navigate("UserManual")} />
                    </Card>
                    <Card
                        image={require('./components/carImages/feedback.png')}>

                        <Button
                            icon={<Icon name='code' color='#ffffff' />}
                            backgroundColor='#03A9F4'
                            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                            title='Feedback'
                            onPress={() => this.props.navigation.navigate("Feedback")} />
                    </Card>



                    

                </ScrollView>

                <Text>Home!</Text>
                
                <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
            </View>
        );
    }
    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate("Auth");
    };
}

class NewOrderScreen extends React.Component {
    static navigationOptions = {
        title: "New Order"
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>New Order!</Text>
                <Button
                    title="Go to Order Details"
                    onPress={() =>
                        this.props.navigation.navigate("OrderDetails", {
                            itemId: 86,
                            otherParam: "anything you want here"
                        })
                    }
                />
                <Button
                    title="Track order"
                    onPress={() => this.props.navigation.navigate("TrackOrder")}
                />
            </View>
        );
    }
}

class OrderDetailsScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam("otherParam", "A Order Details Screen")
        };
    };

    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam("itemId", "NO-ID");
        const otherParam = navigation.getParam("otherParam", "some default value");
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Details!</Text>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>otherParam: {JSON.stringify(otherParam)}</Text>
                <Button
                    title="Update the title"
                    onPress={() =>
                        this.props.navigation.setParams({ otherParam: "Updated!" })
                    }
                />
            </View>
        );
    }
}

class TrackOrderScreen extends React.Component {
    static navigationOptions = {
        title: "Track Order"
    };
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Track Order!</Text>
            </View>
        );
    }
}

class SubmitDocumentScreen extends React.Component {
    static navigationOptions = {
        title: "New Order"
    };
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Submit document!</Text>
            </View>
        );
    }
}

class FeedbackScreen extends React.Component {
    static navigationOptions = {
        title: "Feedback"
    };
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Feedback!</Text>
            </View>
        );
    }
}

class UserManualScreen extends React.Component {
    static navigationOptions = {
        title: "User manual"
    };
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>User manual!</Text>
            </View>
        );
    }
}

class SignInScreen extends React.Component {
    static navigationOptions = {
        title: "Please sign in"
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title="Sign in!" onPress={this._signInAsync} />
            </View>
        );
    }

    _signInAsync = async () => {
        await AsyncStorage.setItem("userToken", "abc");
        this.props.navigation.navigate("Home");
    };
}

class AuthLoadingScreen extends React.Component {
    constructor() {
        super();
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem("userToken");

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(userToken ? "Home" : "Auth");
    };

    // Render any loading content that you like here
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    contentContainer: {
        paddingVertical: 20
    }
});

class IconWithBadge extends React.Component {
    render() {
        const { name, badgeCount, color, size } = this.props;
        return (
            <View style={{ width: 24, height: 24, margin: 5 }}>
                <Ionicons name={name} size={size} color={color} />
                {badgeCount > 0 && (
                    <View
                        style={{
                            // /If you're using react-native < 0.57 overflow outside of the parent
                            // will not work on Android, see https://git.io/fhLJ8
                            position: "absolute",
                            right: -6,
                            top: -3,
                            backgroundColor: "red",
                            borderRadius: 6,
                            width: 12,
                            height: 12,
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <Text style={{ color: "white", fontSize: 10, fontWeight: "bold" }}>
                            {badgeCount}
                        </Text>
                    </View>
                )}
            </View>
        );
    }
}

const getTabBarIcon = (navigation, focused, tintColor) => {
    const { routeName } = navigation.state;
    let IconComponent = Ionicons;
    let iconName;
    if (routeName === "Home") {
        iconName = `ios-information-circle${focused ? "" : "-outline"}`;
        // We want to add badges to home tab icon
        //IconComponent = HomeIconWithBadge;
    } else if (routeName === "NewOrder") {
        iconName = `ios-information-circle${focused ? "" : "-outline"}`;
    } else if (routeName === "TrackOrder") {
        iconName = `ios-information-circle${focused ? "" : "-outline"}`;
    } else if (routeName === "SubmitDoc") {
        iconName = `ios-information-circle${focused ? "" : "-outline"}`;
    } else if (routeName === "Feedback") {
        iconName = `ios-information-circle${focused ? "" : "-outline"}`;
    } else if (routeName === "UserManual") {
        iconName = `ios-information-circle${focused ? "" : "-outline"}`;
    }

    // You can return any component that you like here!
    return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const OrderStack = createStackNavigator(
    {
        NewOrder: NewOrderScreen,
        OrderDetails: OrderDetailsScreen
    },

);

const AuthStack = createStackNavigator({ SignIn: SignInScreen });

const TabNavigator = createBottomTabNavigator(
    {
        Home: { screen: HomeScreen },
        NewOrder: OrderStack,
        TrackOrder: { screen: TrackOrderScreen },
        SubmitDoc: { screen: SubmitDocumentScreen },
        Feedback: { screen: FeedbackScreen },
        UserManual: { screen: UserManualScreen }
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) =>
                getTabBarIcon(navigation, focused, tintColor)
        }),
        tabBarOptions: {
            activeTintColor: "tomato",
            inactiveTintColor: "gray"
        }
    }
);

export default createAppContainer(
    createSwitchNavigator(
        {
            AuthLoading: AuthLoadingScreen,
            Home: TabNavigator,
            Auth: AuthStack
        },
        {
            initialRouteName: "AuthLoading"
        }
    )
);

//export default createAppContainer(TabNavigator);
