import { string } from "prop-types";

export interface Url {
  url: string,
  protocol: string,
  domain1: string,
  domain_2m1: string,
  domain2: string,
  domain3: string,
  id_tpc: string,
}

export interface PayloadGql {
  operationName: boolean,
  variables: any,
  query: string,
}

export interface Payload {
  readonly optGet?: string,
  readonly optPost?: string,
  readonly target?: string[],
  readonly role?: string[],
  readonly msg?: string[],
  readonly actionLog?: string[],
  readonly inception?: string[],
  readonly searchPhrase?: string[],
  readonly searchCategory?: string[],
  readonly searchMedia?: string[],
  readonly catalogCategory?: string[],
  readonly userPrifile?: string[],
  readonly email?: string[],
  readonly width?: number,
  readonly height?: number,
  readonly search?: string,
  readonly pathname?: string,
  readonly hostname?: string,
  readonly href?: string,
}

export interface ModeProdDev {
  readonly checkEnterEmail?: boolean,
  readonly checkSelectRole?: boolean,
}

export interface Action {
// tslint:disable-next-line: no-reserved-keywords
  readonly type: string,
  readonly data?: any,
  readonly payload?: any,
  readonly lang?: string,
  readonly treeData?: any,
  readonly modalNext?: string,
  readonly capture?: string,
  readonly eid?: string,
  readonly general?: boolean,
  readonly navBar?: any,
  readonly project?: {}[] | [],
  readonly getActionAsync?: Function,
}

export interface ModalWindowStateItem {
  component?: string,
  display?: boolean,
}

export type ModalWindowState = [ModalWindowStateItem]
