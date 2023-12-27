type FindObjectsByKeyValuesType = <T extends {}>(input: string, objects: T[], keyName: keyof T) => T[]

export const findObjectsByKeyValues: FindObjectsByKeyValuesType = (input, objects, keyName) => {
  const regex = new RegExp(input, 'i');

  return objects.filter((obj) => {
    if (obj.hasOwnProperty(keyName)) {
      return regex.test(obj[keyName] as string)
    }
    return false
  });
}