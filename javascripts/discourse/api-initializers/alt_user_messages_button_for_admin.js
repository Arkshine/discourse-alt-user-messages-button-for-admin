import { apiInitializer } from "discourse/lib/api";
import discourseComputed from "discourse-common/utils/decorators"

export default apiInitializer("0.11.1", (api) => {
  /**
   * Hides the "messages" tab for admin when visiting a user's profile.
   */
  api.modifyClass('controller:user', {
      pluginId: 'alt-user-messages-button-admin',

      @discourseComputed(
          "viewingSelf",
          "currentUser.admin",
          "currentUser.can_send_private_messages"
      )
      showPrivateMessages(viewingSelf, isAdmin) {
          return (this.currentUser?.can_send_private_messages && (viewingSelf /* || isAdmin*/));
      }
  });
});

