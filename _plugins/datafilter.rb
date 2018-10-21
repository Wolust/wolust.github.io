 
module DateFilter
  MONTHS = %w(Januar Februar März April Mai Juni July August September Oktober November Dezember)

  def german_long_month(input)
    MONTHS[input.strftime("%m").to_i - 1]
  end
end

Liquid::Template.register_filter(DateFilter)
