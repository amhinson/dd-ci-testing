#!/bin/sh
set -e

export USE_HERMES=true

# If the build runs from XCode, we cannot use yarn.
# Check first which yarn executable is appropriate
package_manager_test_command="bin" # both `yarn bin` and `npm bin` are valid commands
test_and_set_package_manager_bin()
{
  $(echo $1 $package_manager_test_command) && export PACKAGE_MANAGER_BIN=$1
}

test_and_set_package_manager_bin "yarn" || # Replace yarn by npm if you use npm
test_and_set_package_manager_bin "/opt/homebrew/bin/node /opt/homebrew/bin/yarn" || # Replace yarn by npm if you use npm
echo "package manager not found"

REACT_NATIVE_XCODE="node_modules/react-native/scripts/react-native-xcode.sh"
DATADOG_XCODE="$(echo $PACKAGE_MANAGER_BIN) datadog-ci react-native xcode --force"

/bin/sh -c "$DATADOG_XCODE $REACT_NATIVE_XCODE"