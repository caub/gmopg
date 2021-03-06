import test from 'ava'
import * as client from './client.enum'

test('exports PayType as enum', (t) => {
  const expect = {
    Cash: 'Z',
    Credit: '0',
    Suica: '1',
    Edy: '2',
    Cvs: '3'
  }
  t.deepEqual(client.PayType, expect)
})

test('exports Method as enum', (t) => {
  const expect = {
    Lump: '1',
    Installment: '2',
    BonusLump: '3',
    Revolving: '4',
    BonusInstallment: '5'
  }
  t.deepEqual(client.Method, expect)
})

test('exports Status as enum', (t) => {
  const expect = {
    Unprocessed: 'UNPROCESSED',
    Authenticated: 'AUTHENTICATED',
    Check: 'CHECK',
    Capture: 'CAPTURE',
    Auth: 'AUTH',
    Sales: 'SALES',
    Void: 'VOID',
    Return: 'RETURN',
    Returnx: 'RETURNX',
    Sauth: 'SAUTH',
    Reqsuccess: 'REQSUCCESS',
    Paysuccess: 'PAYSUCCESS',
    Payfail: 'PAYFAIL',
    Expired: 'EXPIRED',
    Cancel: 'CANCEL'
  }
  t.deepEqual(client.Status, expect)
})

test('exports JobCd as enum', (t) => {
  const expect = {
    Check: 'CHECK',
    Capture: 'CAPTURE',
    Auth: 'AUTH',
    Sales: 'SALES',
    Void: 'VOID',
    Return: 'RETURN',
    Returnx: 'RETURNX',
    Sauth: 'SAUTH'
  }
  t.deepEqual(client.JobCd, expect)
})

test('exports SeqMode as enum', (t) => {
  const expect = {
    Logic: '0',
    Physics: '1'
  }
  t.deepEqual(client.SeqMode, expect)
})

test('exports DefaultFlag as enum', (t) => {
  const expect = {
    BillingObject: '0',
    NotSubjectToCharge: '1'
  }
  t.deepEqual(client.DefaultFlag, expect)
})

test('exports CvsCode as enum', (t) => {
  const expect = {
    _Lawson: '00001',
    _FamilyMart: '00002',
    _Sunkus: '00003',
    _CircleK: '00004',
    _MiniStop: '00005',
    _DailyYamazaki: '00006',
    _SeicoMart: '00008',
    Lawson: '10001',
    FamilyMart: '10002',
    Sunkus: '10003',
    CircleK: '10004',
    MiniStop: '10005',
    SevenEleven: '00007',
    SeicoMart: '10008'
  }
  t.deepEqual(client.CvsCode, expect)
})
