import { Pipe, PipeTransform } from '@angular/core';

// Cambia a mayuscula o minuscula
@Pipe({
    name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {

    transform(value: string, toUpper: boolean = false, ...args: any[]): string {
        return (toUpper) ? value.toUpperCase() : value.toLowerCase();
    }
}