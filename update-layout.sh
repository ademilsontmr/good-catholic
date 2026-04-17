#!/bin/bash

# Script para atualizar layout dos artigos para coincidir com o artigo de referência

ARTICLES=(
  "HealingThroughFaith.tsx"
  "DignityOfWork.tsx"
  "SaintPadrePioMiracles.tsx"
  "PropheciesOfFatima.tsx"
  "NovenasExplained.tsx"
  "DivineOfficeLaity.tsx"
  "FaithAndAnxiety.tsx"
  "ManagingDepression.tsx"
  "SacramentOfMatrimony.tsx"
  "EucharisticPrayers.tsx"
  "LentPreparationGuide.tsx"
  "JubileePilgrimageGuide.tsx"
  "CatholicChurchHistory.tsx"
  "HowToReadBible.tsx"
  "CatholicFamilyTraditions.tsx"
  "HolyWaterSacramental.tsx"
  "CatholicSocialTeachingToday.tsx"
  "LivingVirtue.tsx"
  "RosaryMysteriesMeditation.tsx"
  "CatholicMarriagePreparation.tsx"
)

BASE_DIR="/Users/ademilsonr/Desktop/bom catolico ingles/faith-journey-check/src/pages/blog"

for article in "${ARTICLES[@]}"; do
  echo "Atualizando: $article"
  
  # Extrair nome do componente e título para versículos personalizados
  COMPONENT_NAME=$(grep -o "export default function [A-Za-z]*" "$BASE_DIR/$article" | sed 's/export default function //')
  
  # Substituir breadcrumbs section
  sed -i '' 's/<div className="min-h-screen bg-background">/<div className="min-h-screen bg-background">\n        <Navbar \/>\n\n        <div className="bg-background-muted\/50 py-3 mt-16">\n          <div className="container mx-auto px-4">\n            <nav className="flex items-center gap-2 text-sm text-text-muted">\n              <Link to="\/" className="hover:text-accent">Home<\/Link>\n              <span>\/<\/span>\n              <Link to="\/blog" className="hover:text-accent">Blog<\/Link>\n              <span>\/<\/span>\n              <span className="text-text">Article<\/span>\n            <\/nav>\n          <\/div>\n        <\/div>/g' "$BASE_DIR/$article"
  
  # Atualizar botão Back to Blog
  sed -i '' 's/<Link to="\/blog\/">/<Link to="\/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent\/80 mb-8">/g' "$BASE_DIR/$article"
  sed -i '' 's/<Button variant="outline" className="mb-6 border-primary text-primary hover:bg-primary\/10">/<ArrowLeft className="w-4 h-4" \/>\n              Back to Blog/g' "$BASE_DIR/$article"
  
done

echo "Layout atualizado para todos os artigos!"
