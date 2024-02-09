import React from 'react';
import UserProfile from './UserProfile';

describe('<UserProfile />', () => {
  it('user data is populated in UserProfile', () => {
    const user = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@techfabric.com',
    };

    cy.mount(<UserProfile user={user} />);

    cy.contains('h2', 'First Name:').parent().contains(user.firstName);
    cy.contains('h2', 'Last Name:').parent().contains(user.lastName);
    cy.contains('h2', 'Email:').parent().contains(user.email);
  });
});
