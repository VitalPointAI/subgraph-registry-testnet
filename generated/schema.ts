// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Account extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("accountId", Value.fromString(""));
    this.set("actionData", Value.fromBigInt(BigInt.zero()));
    this.set("actionKind", Value.fromI32(0));
    this.set("gasPrice", Value.fromBigInt(BigInt.zero()));
    this.set("name", Value.fromString(""));
    this.set("did", Value.fromString(""));
    this.set("dataReceiver", Value.fromStringArray(new Array(0)));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Account entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Account entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Account", id.toString(), this);
    }
  }

  static load(id: string): Account | null {
    return changetype<Account | null>(store.get("Account", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get accountId(): string {
    let value = this.get("accountId");
    return value!.toString();
  }

  set accountId(value: string) {
    this.set("accountId", Value.fromString(value));
  }

  get actionData(): BigInt {
    let value = this.get("actionData");
    return value!.toBigInt();
  }

  set actionData(value: BigInt) {
    this.set("actionData", Value.fromBigInt(value));
  }

  get actionKind(): i32 {
    let value = this.get("actionKind");
    return value!.toI32();
  }

  set actionKind(value: i32) {
    this.set("actionKind", Value.fromI32(value));
  }

  get gasPrice(): BigInt {
    let value = this.get("gasPrice");
    return value!.toBigInt();
  }

  set gasPrice(value: BigInt) {
    this.set("gasPrice", Value.fromBigInt(value));
  }

  get inputDataIds(): Array<Bytes> | null {
    let value = this.get("inputDataIds");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytesArray();
    }
  }

  set inputDataIds(value: Array<Bytes> | null) {
    if (!value) {
      this.unset("inputDataIds");
    } else {
      this.set("inputDataIds", Value.fromBytesArray(<Array<Bytes>>value));
    }
  }

  get actionLogs(): Array<string> | null {
    let value = this.get("actionLogs");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set actionLogs(value: Array<string> | null) {
    if (!value) {
      this.unset("actionLogs");
    } else {
      this.set("actionLogs", Value.fromStringArray(<Array<string>>value));
    }
  }

  get json(): Array<Bytes> | null {
    let value = this.get("json");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytesArray();
    }
  }

  set json(value: Array<Bytes> | null) {
    if (!value) {
      this.unset("json");
    } else {
      this.set("json", Value.fromBytesArray(<Array<Bytes>>value));
    }
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get did(): string {
    let value = this.get("did");
    return value!.toString();
  }

  set did(value: string) {
    this.set("did", Value.fromString(value));
  }

  get dataReceiver(): Array<string> {
    let value = this.get("dataReceiver");
    return value!.toStringArray();
  }

  set dataReceiver(value: Array<string>) {
    this.set("dataReceiver", Value.fromStringArray(value));
  }
}

export class DataReceiver extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("dataId", Value.fromBytes(Bytes.empty()));
    this.set("receiverId", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save DataReceiver entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save DataReceiver entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("DataReceiver", id.toString(), this);
    }
  }

  static load(id: string): DataReceiver | null {
    return changetype<DataReceiver | null>(store.get("DataReceiver", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get dataId(): Bytes {
    let value = this.get("dataId");
    return value!.toBytes();
  }

  set dataId(value: Bytes) {
    this.set("dataId", Value.fromBytes(value));
  }

  get receiverId(): string {
    let value = this.get("receiverId");
    return value!.toString();
  }

  set receiverId(value: string) {
    this.set("receiverId", Value.fromString(value));
  }
}
