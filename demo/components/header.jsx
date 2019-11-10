import { Header } from 'react-native-elements';
class Header extends React.Component{
    render()
    {
        <Header
        leftComponent={{
        icon: 'menu',
        color: '#fff',
        onPress: () => {},
        }}
        centerComponent={{ text: 'Crime Report', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' ,onPress:()=>{}}}
        backgroundColor="green"
        />
    }
}
export default Header;