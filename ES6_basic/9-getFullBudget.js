// Importa la función 'getBudgetObject' desde el archivo './7-getBudgetObject.js'
// Esta función probablemente crea un objeto básico con propiedades income, gdp y capita
import getBudgetObject from './7-getBudgetObject.js';

// Exporta por defecto la función getFullBudgetObject que toma tres parámetros:
// - income: valor numérico que representa ingresos
// - gdp: valor numérico que representa el Producto Interno Bruto
// - capita: valor numérico que representa el per cápita
export default function getFullBudgetObject(income, gdp, capita) {
  // Crea un objeto budget llamando a getBudgetObject con los tres parámetros
  // Este objeto contendrá las propiedades básicas del presupuesto
  const budget = getBudgetObject(income, gdp, capita);

  // Crea un objeto fullBudget que:
  // 1. Copia todas las propiedades de budget usando el operador spread (...)
  // 2. Añade dos nuevos métodos al objeto:
  const fullBudget = {
    ...budget,  // Copia todas las propiedades de budget
    
    // Método para formatear income como dólares
    // Ejemplo: getIncomeInDollars(1000) retorna "$1000"
    getIncomeInDollars:(income) {
      return `$${income}`;  // Template string con prefijo $
    },
    
    // Método para formatear income como euros
    // Ejemplo: getIncomeInEuros(1000) retorna "1000 euros"
    getIncomeInEuros:(income) {
      return `${income} euros`;  // Template string con sufijo euros
    },
  };

  // Retorna el objeto completo con propiedades y métodos
  return fullBudget;
}