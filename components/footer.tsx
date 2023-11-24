"use client";
import React from "react";
import Image from "next/image";
import { CDBModalFooter, CDBBtn, CDBIcon, CDBBox } from "cdbreact";



export function FooterHome() {
    return (
        <CDBModalFooter className="shadow">
                <CDBBox
                display="flex"
                justifyContent="between"
                alignItems="center"
                className="mx-auto py-4 flex-wrap"
                style={{ width: "80%" }}
            >
                <CDBBox display="flex" alignItems="center">
                    <a href="/" className="d-flex align-items-center p-0 text-dark">
                        <Image alt="logo" src="/elRastroLogo.png" width={100} height={100}></Image>
                        <span className="ms-4 h5 mb-0 font-weight-bold">elRastro</span>
                    </a>
                    <small className="ms-2">&copy; elRastro, 2023. All rights reserved.</small>
                </CDBBox>
                <CDBBox display="flex">
                    <CDBBtn flat color="dark" className="p-2">
                        <CDBIcon fab icon="facebook-f" />
                    </CDBBtn>
                    <CDBBtn flat color="dark" className="mx-3 p-2">
                        <CDBIcon fab icon="twitter" />
                    </CDBBtn>
                    <CDBBtn flat color="dark" className="p-2">
                        <CDBIcon fab icon="instagram" />
                    </CDBBtn>
                </CDBBox>
            </CDBBox>
        </CDBModalFooter>
    );
}