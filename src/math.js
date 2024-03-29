let Util = {};
Util.factorial = (n) => {
    if (n === 0) {
        return 1;
    }

    if (n >= 3000) {
        throw 'n too large'
    }

    if (n < 0) {
        throw 'n is negative'
    }

    return n * Util.factorial(n - 1);
};

/**
 * Détermine si n est un nombre premier.
 * Util.isPrime(5) => false
 * Util.isPrime(6) => true
 *
 * @param {number} n
 * @returns {boolean}
 */
Util.isPrime = function (n) {
    if (n === 1 || n === 0) {
        return false;
    }
    if (n < 0) {
        throw 'Unable to compute prime for n < 0'
    }
    for (var i = 2; i < n; i++)
        if (n % i === 0) return false;
    return true;

};


/**
 * Additionne l'ensemble des nombres premiers de 2 à n
 *
 * Util.sumPrime(6) = 2 + 3 + 5 = 10
 * Util.sumPrime(8) = 2 + 3 + 5 + 7 = 17
 *
 * @param {number} n
 * @returns {number}
 */
Util.sumPrime = function(n)
{
    if(Util.isPrime(n))
    {
        if(n<2)
        {
          return 0;
        } else
        return n+Util.sumPrime(n-1);
    }
      else
    {
        if(n<2)
        {
            return 0;
        } 
		else return Util.sumPrime(n-1);
    }
};

/**
 * Cette méthode doit retourner un tableau de 1 à n tel que:
 * - Pour les nombres multiples de 3, les remplacer par "Fizz"
 * - Pour les nombres multiples de 5, les remplacer par "Buzz"
 * - Pour les nombres multiples de 3 et 5, les remplacer par "FizzBuzz"
 *
 * Exp :
 * Util.fizzBuzz(15) => [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
 *
 * @param {number} n
 * @returns {array}
 */
Util.fizzBuzz = function(n)
{
  var arrayFizz=Array();
    while(n>0)
    {
        if((n % 3)==0 && (n % 5)==0)
			{
				arrayFizz.push("FizzBuzz")
			}
		else if((n % 3)==0)
			{
				arrayFizz.push("Fizz");
			}
		else if((n % 5)==0)
			{
				arrayFizz.push("Buzz");
			}
		else arrayFizz.push(n);
		n--;
    }
    return arrayFizz;
};

/**
 * Chiffre une phrase selon la règle suivante : Les A deviennent des B, les B des C, etc.
 *
 * Exp :
 * Util.cipher("Test Unitaire") => "Uftu Tojubjsf"
 *
 * @param phrase
 * @returns {string}
 */
Util.cipher = function (phrase)
{
    var maPhraseChar=phrase.split('');
    var resultat="";
    maPhraseChar.forEach(function(c)
    {
      var char=c.charCodeAt(0);
        if(char==90)
        {
            char=64;
        }
        if(char==122)
        {
          char=96;
        }
          resultat+=String.fromCharCode(char+1);
      }
    );
    return resultat;
};

module.exports = Util;
