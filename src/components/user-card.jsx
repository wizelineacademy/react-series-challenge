import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ProfileAvatar } from '../components';

const UserCardWrapper = styled.div`
  > div:first-of-type {
    color: white;
    font-weight: bold;
    padding-top: 10px;
  }
  > div:last-of-type {
    font-size: .8em;
  }
`;

const UserCard = ({ data: { username, display_name, profile_url, avatar_url, is_verified } }) => (
  <UserCardWrapper>
    <Link to={profile_url}><ProfileAvatar src={avatar_url} alt={display_name} /></Link>
    <div>{ display_name }</div>
    <div>{ `@${username}` } { is_verified ? 'Verified' : '' }</div>
  </UserCardWrapper>
);

UserCard.propTypes = { data: PropTypes.object };
UserCard.defaultProps = { data: {} };

export default UserCard;
