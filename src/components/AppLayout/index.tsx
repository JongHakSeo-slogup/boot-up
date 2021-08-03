import React from 'react';
import styles from "./style";

interface AppLayoutProps {
    children: JSX.Element
}

function AppLayout({ children }: AppLayoutProps) {
    return (
        <styles.Wrapper>
            <styles.Layout>
                {children}
            </styles.Layout>
        </styles.Wrapper>
    )
}

export default AppLayout;