/**
 *
 * Asynchronously loads the component for Album
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
