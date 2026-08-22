#include <iostream>

// C++ total price calculator function
// Incorporates 5% sales tax and a 10% discount for orders over $50
extern "C" {

    double calculate_final_total(double subtotal) {
        double tax_rate = 0.05; // 5% tax
        double discount = 0.0;

        if (subtotal >= 50.0) {
            discount = subtotal * 0.10; // 10% discount
        }

        double discounted_subtotal = subtotal - discount;
        double final_total = discounted_subtotal + (discounted_subtotal * tax_rate);

        return final_total;
    }

}
