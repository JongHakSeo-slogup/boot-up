import styles from "./style";

interface SplashProps {
    logo: string,
}

function Splash({logo}: SplashProps) {
    return (
            <styles.SplashLayout>
                <styles.Logo src={logo} alt={logo} />
            </styles.SplashLayout>
    )
}

Splash.defaultProps = {
    logo: '/images/logo_carpet.png',
}

export default Splash;