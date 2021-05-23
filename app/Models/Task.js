export class Task {
  constructor(title, isChecked = false){
    this.title = title
    this.checked = isChecked
  }

  toggleChecked(check){
    this.checked = check
  }

  toObj() {
    return {
      title: this.title,
      checked: this.checked
    }
  }
}