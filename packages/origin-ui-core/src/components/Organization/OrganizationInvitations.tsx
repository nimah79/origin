import React from 'react';
import { useSelector } from 'react-redux';

import { getUserOffchain } from '../../features/users/selectors';
import { OrganizationInvitationTable } from './OrganizationInvitationTable';
import { isRole, Role } from '@energyweb/origin-backend-core';
import { useTranslation } from '../../utils';
import { Redirect } from 'react-router-dom';
import { UserLogin } from '../Account/UserLogin';

export function OrganizationInvitations() {
    const { t } = useTranslation();
    const user = useSelector(getUserOffchain);

    // if (!userOffchain) {
    //     return t('general.feedback.registerOrLoginTryAgain');
    // }

    if (!user) {
        return <UserLogin redirect="/organization/organization-invitations" />;
    }

    return (
        <>
            {isRole(user, Role.OrganizationAdmin) && (
                <>
                    Sent
                    <br />
                    <br />
                    <OrganizationInvitationTable organizationId={user?.organization?.id} />
                    <br />
                    <br />
                </>
            )}
            Received
            <br />
            <br />
            <OrganizationInvitationTable email={user?.email} />
        </>
    );
}
