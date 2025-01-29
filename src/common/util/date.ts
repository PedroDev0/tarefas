export function timeInSecond(time: string) {

    const [horas = '0', minutos = '0', secound = '0'] = time.split(':')

    const countHours = Number(horas) * 3600;
    const countMinutes = Number(minutos) * 60;

    return countHours + countMinutes + Number(secound);
}