// Local modules.
const languramaTypeCheck = require('../dist/').default;

languramaTypeCheck.array([]);
languramaTypeCheck.asyncFunction(async function() {});
languramaTypeCheck.bigint(BigInt(666));
languramaTypeCheck.boolean(true);
languramaTypeCheck.date(new Date());
languramaTypeCheck.error(new Error());
languramaTypeCheck.function(function() {});
languramaTypeCheck.generatorFunction(function*() {});
languramaTypeCheck.nan(NaN);
languramaTypeCheck.null(null);
languramaTypeCheck.number(666);
languramaTypeCheck.object({});
class Test {}
languramaTypeCheck.object(new Test());
languramaTypeCheck.object(new Proxy({}, {}));
languramaTypeCheck.promise(new Promise(() => {}));
languramaTypeCheck.string('hell');
languramaTypeCheck.symbol(Symbol());
languramaTypeCheck.undefined(undefined);
