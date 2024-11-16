import React, {Suspense} from 'react';
import Container from "../global/Container";
import Logo from './Logo';
import NavSearch from "@/components/navbar/NavSearch";
import CartButton from "@/components/navbar/CartButton";
import DarkMode from "@/components/navbar/DarkMode";
import LinksDropdown from "@/components/navbar/LinksDropdown";

function Navbar() {
    return (
        <div className='border-b'>
            <Container className='flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-8'>
                <Logo></Logo>


                <Suspense>
                    <NavSearch />
                </Suspense>
                <div className="flex gap-4 items-center">
                    <CartButton></CartButton>
                    <DarkMode></DarkMode>
                    <LinksDropdown></LinksDropdown>
                </div>
            </Container>
        </div>
    );
}

export default Navbar;