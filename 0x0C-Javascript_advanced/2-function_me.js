#!/usr/bin/env node

/**
 * welcomeMessage - closure
 * @param {String} fullName
 * @returns closure full name message
 */
function welcomeMessage (fullName) {
  return () => {
    alert(`Welcome ${fullName}`);
  };
}

const guillaume = welcomeMessage('Guillaume');
const alex = welcomeMessage('Alex');
const fred = welcomeMessage('Fred');
