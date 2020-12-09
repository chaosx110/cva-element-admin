<script lang="ts">
import { h, computed, resolveComponent, defineComponent } from "vue";
import type { SetupContext } from "vue"
import { isExternal } from "/src/utils/validate";

export interface ILinkProps {
  to: string;
}

export default defineComponent({
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  setup({ to }: ILinkProps, ctx: SetupContext) {
    const isExt = computed(() => isExternal(to));
    const type = computed(() => {
      if (isExt) {
        return "a";
      }
      return "router-link";
    });
    const linkProps = computed(() => {
      if (isExt) {
        return {
          href: to,
          target: "_blank",
          rel: "noopener",
        };
      }
      return {
        to
      };
    });

    return h(resolveComponent(type.value), linkProps);
  },
});
</script>
