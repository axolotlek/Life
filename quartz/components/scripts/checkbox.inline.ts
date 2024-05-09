import { getFullSlug } from "../../util/path"

const checkboxId = (Index: number) => `${getFullSlug(window)}-checkbox-${Index}`

document.addEventListener("nav", () => {
  const checkboxes = document.querySelectorAll(
    "input.checkbox-toggle",
  ) as NodeListOf<HTMLInputElement>
  checkboxes.forEach((el, Index) => {
    const elId = checkboxId(Index)

    const switchState = (e: Event) => {
      const newCheckboxState = (e.target as HTMLInputElement)?.checked ? "true" : "false"
      localStorage.setItem(elId, newCheckboxState)
    }

    el.addEventListener("change", switchState)
    window.addCleanup(() => el.removeEventListener("change", switchState))
    if (localStorage.getItem(elId) === "true") {
      el.checked = true
    }
  })
})
