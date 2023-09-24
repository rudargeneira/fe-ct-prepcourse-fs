//La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

   //import java.util.*;

   //import java.util.*;

public class ContarLetras {

    public static Map<Character, Integer> contarLetras(String str) {
        Map<Character, Integer> mapa = new HashMap<>();
        for (char letra : str.toCharArray()) {
            int numRepeticiones = mapa.getOrDefault(letra, 0) + 1;
            mapa.put(letra, numRepeticiones);
        }

        // Ordenar el mapa por orden alfabético
        List<Map.Entry<Character, Integer>> lista = new ArrayList<>(mapa.entrySet());
        lista.sort((a, b) -> a.getKey().compareTo(b.getKey()));

        // Convertir la lista en un mapa nuevo
        Map<Character, Integer> mapaOrdenado = new HashMap<>();
        for (Map.Entry<Character, Integer> entrada : lista) {
            mapaOrdenado.put(entrada.getKey(), entrada.getValue());
        }

        return mapaOrdenado;
    }

    public static void main(String[] args) {
        String str = "adsjfdsfsfjsdjfhacabcsbajda";
        Map<Character, Integer> mapa = contarLetras(str);

        System.out.println(mapa);
    }
}