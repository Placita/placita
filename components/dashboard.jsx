import React from 'react'
import styled from 'styled-components'
import {
  Box,
  H2,
  H5,
  H4,
  Icon,
  Text,
  Button
} from '@admin-bro/design-system'

const pageHeaderHeight = 284
const pageHeaderPaddingY = 74
const pageHeaderPaddingX = 250

export const DashboardHeader = () => {
  return (
    <Box position="relative" overflow="hidden">
      <Box
        bg="#615a44"
        height={pageHeaderHeight}
        py={pageHeaderPaddingY}
        px={['default', 'lg', pageHeaderPaddingX]}
      >
        <Text textAlign="center" color="white">
          <H2>Placita Riverside</H2>
          <Text opacity={0.8}>
            The admin dashboard to manage your website
          </Text>
        </Text>
      </Box>
    </Box>
  )
}

const boxes = () => [
  {
    icon: 'User',
    title: 'Admin Management',
    subtitle: 'Add, edit, and remove admin users',
    href: '/admin/resources/Admin'
  },
  {
    icon: 'Restaurant',
    title: 'Menu Management',
    subtitle: 'Add, edit, and remove menu items',
    href: '/admin/resources/MenuItem'
  },
  {
    icon: 'EventSchedule',
    title: 'Happenings Management',
    subtitle: 'Add, edit, and remove happenings',
    href: '/admin/resources/Happenings'
  }
]

const Card = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #e68b07;
  background-color: #fff3d4;
  text-decoration: none;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid #e68b07;
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
  }
`

Card.defaultProps = {
  variant: 'white',
  boxShadow: 'card'
}

export const Dashboard = () => {
  return (
    <Box>
      <DashboardHeader />
      <Box
        mt={['xl', 'xl', '-100px']}
        mb="xl"
        mx={[0, 0, 0, 'auto']}
        px={['default', 'lg', 'xxl', '0']}
        position="relative"
        flex
        flexDirection="row"
        flexWrap="wrap"
        width={[1, 1, 1, 1024]}
      >
        {boxes().map((box, index) => (
          <Box key={index} width={[1, 1 / 2, 1 / 2, 1 / 3]} p="lg">
            <Card as="a" href={box.href}>
              <Icon icon={box.icon} color="#a4580d" size={32} />
              <Text textAlign="center">
                <H5 mt="lg">{box.title}</H5>
                <Text color="#a4580d">{box.subtitle}</Text>
              </Text>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Dashboard
