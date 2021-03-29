import {Breadcrumb,BreadcrumbLink, BreadcrumbItem } from  "@chakra-ui/react"

import React from 'react'

function NavBar() {
    return (
        <div>
            <Breadcrumb separator="-" color="lightblue" bgColor="gray.600" h="100px" pl= "5px" py="15px">
            <BreadcrumbItem>
                <BreadcrumbLink fontFamily='heading' href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href="#">About</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">Contact</BreadcrumbLink>
            </BreadcrumbItem>
            </Breadcrumb>
            
        </div>
    )
}

export default NavBar

