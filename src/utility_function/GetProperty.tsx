export default function GetProperty<T, K extends keyof T>(object: T, property: K) {
  return object[property];
}
