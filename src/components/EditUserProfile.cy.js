import React from 'react';
import EditUserProfile from './EditUserProfile';

describe('<EditUserProfile />', () => {
  it('completeCallback is called on save data for user object', () => {
    const user = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@techfabric.com',
    };

    const completeCallbackSpy = cy.spy().as('completeCallbackSpy');

    cy.mount(
      <EditUserProfile user={user} completeCallback={completeCallbackSpy} />
    );

    cy.get('[data-cy=save]').click();
    cy.get('@completeCallbackSpy').should('have.been.called');
  });
});
