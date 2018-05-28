import { Proxy, logger, Method, MethodConfig, Verbs, MethodType, Body, Param, 
    Query,Response, Request, Files, Cookies, Headers, SecurityContext, MethodResult, 
    MethodError } from '@methodus/server';
/*start custom*/
function allowOnlyInternals(req, res, next) {
    if (req.att.role.level === 'internal') {
        next();
    }
    else {
        res.status(401).send('permission error');
    }
}
@Proxy.ProxyClass('Rule','./rule.controller')
@MethodConfig('./tests/contracts')
export class Rule  {
    @Method(Verbs.Post, '/api/rules', [allowOnlyInternals])
    public create(req: any, res: any) {
      throw(new MethodError('not implemented', 500));
 } 
     @Method(Verbs.Get, '/api/rules/:rule_id')
    public byId(req: any, res: any) {
      throw(new MethodError('not implemented', 500));
 } 
     @Method(Verbs.Put, '/api/rules/:rule_id', [allowOnlyInternals])
    public update(req: any, res: any) {
      throw(new MethodError('not implemented', 500));
 } 
     @Method(Verbs.Delete, '/api/rules/:rule_id', [allowOnlyInternals])
    public delete(req: any, res: any) {
      throw(new MethodError('not implemented', 500));
 } 
     @Method(Verbs.Get, '/api/rules')
    public async list(req: any, res: any) {
      throw(new MethodError('not implemented', 500));
 } 
     @Method(Verbs.Get, '/api/rules/devices', [allowOnlyInternals])
    public devices(req: any, res: any) {
      throw(new MethodError('not implemented', 500));
 } 
     @Method(Verbs.Get, '/api/rules/companies')
    public companies(req: any, res: any) {
      throw(new MethodError('not implemented', 500));
 } 
     @Method(Verbs.Get, '/api/rules/:rule_id/logs', [allowOnlyInternals])
    public listLogs(req: any, res: any) {
      throw(new MethodError('not implemented', 500));
 } 
  
    }