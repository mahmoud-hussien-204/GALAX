type ClassValue = ClassArray | ClassDictionary | string | number | boolean | null | undefined;

interface ClassDictionary {
  [id: string]: boolean | undefined | null;
}

type ClassArray = Array<ClassValue>;

export default class AppHelper {
  static sliceContent(str: string, len = 25) {
    return str.length > len ? str.slice(0, len) + "..." : str;
  }

  static handleAddress(str: string) {
    if (!str) return "";
    const count = 4;
    if (str.length < 8) return str;
    return str.slice(0, count) + " .... " + str.slice(count, count * 2);
  }

  static hashEmail(email: string) {
    const atIndex = email.indexOf("@");
    const username = email.substring(0, atIndex);
    const domain = email.substring(atIndex + 1);

    const hashedUsername = username.substring(0, 3) + "***";
    const hashedEmail = hashedUsername + "@" + domain;

    return hashedEmail;
  }

  static sliceName(name: string | undefined) {
    if (!name) {
      return "";
    }
    const nameArray = name.split(" ");
    return nameArray[0][0] + "." + nameArray[1];
  }

  static toFormData(data: any, formData: FormData = new FormData(), parentKey?: string): FormData {
    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        const value = data[key];
        const formKey = parentKey ? `${parentKey}[${key}]` : key;
        if (typeof value === "object" && !(value instanceof File)) {
          AppHelper.toFormData(value, formData, formKey);
        } else if (Array.isArray(value)) {
          value.forEach((item, index) => {
            if (typeof item === "object" && !(item instanceof File)) {
              AppHelper.toFormData(item, formData, `${formKey}[${index}]`);
            } else {
              if (item instanceof File) {
                formData.append(formKey, item);
              } else {
                formData.append(`${formKey}[${index}]`, item);
              }
            }
          });
        } else {
          if (value instanceof File) {
            formData.append(formKey, value);
          } else {
            formData.append(formKey, value);
          }
        }
      }
    }
    return formData;
  }

  static classes(...args: ClassValue[]): string {
    let className = "";
    for (const arg of args) {
      if (typeof arg === "string" || typeof arg === "number") {
        className += `${arg} `;
      } else if (typeof arg === "object") {
        if (Array.isArray(arg)) {
          for (const element of arg) {
            className += `${element} `;
          }
        } else {
          for (const key in arg) {
            if (arg[key]) {
              className += `${key} `;
            }
          }
        }
      }
    }

    return className.trim();
  }

  static urlSearchParams(payload: Record<string, string | number | boolean | undefined>) {
    const data = new URLSearchParams();
    for (const key in payload) {
      if (payload[key]) {
        data.append(key, payload[key] as string);
      }
    }
    return data.toString();
  }

  static convertStatusToBinary(status: string) {
    switch (status.toLowerCase()) {
      case "active":
        return "1";
      case "deactive":
        return "0";
      default:
        return "0";
    }
  }

  static convertSwitchValueToBinary(value: string | number | undefined) {
    if (value === undefined) return 0;
    if (typeof value === "number") return value;
    if (!isNaN(Number(value))) return +value;
    switch (value) {
      case "on":
        return 1;
      case "off":
        return 0;
      case "true":
        return 1;
      case "false":
        return 0;
      default:
        return 0;
    }
  }

  static handleSelectBoxOptions<T>(options: T[], label: keyof T, value: keyof T) {
    const optionsList = options.map((data) => ({label: data[label], value: data[value]}));

    return optionsList;
  }
}
